"use client";

const REGIONS = ["Central", "North", "North-East", "East", "West"] as const;

type Region = (typeof REGIONS)[number];

const TOWNS_BY_REGION: Record<Region, string[]> = {
  Central: [
    "Bishan",
    "Toa Payoh",
    "Bukit Timah",
    "Queenstown",
    "Novena",
    "Orchard/River Valley",
  ],
  North: ["Woodlands", "Sembawang", "Yishun", "Ang Mo Kio"],
  "North-East": ["Punggol", "Sengkang", "Hougang", "Serangoon"],
  East: ["Tampines", "Pasir Ris", "Bedok", "Marine Parade"],
  West: ["Jurong East", "Jurong West", "Bukit Batok", "Choa Chu Kang", "Clementi"],
};

export interface LocationPickerProps {
  visible: boolean;
  onChange: (region: string, town: string) => void;
  value: { region: string; town: string };
}

export function LocationPicker({ visible, onChange, value }: LocationPickerProps) {
  if (!visible) return null;

  const selectedRegion = REGIONS.includes(value.region as Region)
    ? (value.region as Region)
    : null;
  const towns = selectedRegion ? TOWNS_BY_REGION[selectedRegion] : [];

  const selectRegion = (region: Region) => {
    onChange(region, "");
  };

  const selectTown = (town: string) => {
    if (selectedRegion) {
      onChange(selectedRegion, town);
    }
  };

  return (
    <section className="space-y-5 rounded-lg bg-slate-800 p-4">
      <div>
        <h3 className="text-base font-semibold text-slate-100">
          For non-IP schools, proximity to home matters. Where do you live?
        </h3>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-300">Region</p>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => selectRegion(region)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                value.region === region
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {selectedRegion && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-300">Town</p>
          <div className="flex flex-wrap gap-2">
            {towns.map((town) => (
              <button
                key={town}
                type="button"
                onClick={() => selectTown(town)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  value.town === town
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                }`}
              >
                {town}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
