const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID
  ? Number(process.env.BREVO_LIST_ID)
  : null;

export async function addContactToBrevo(email: string): Promise<void> {
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.warn("[brevo] BREVO_API_KEY or BREVO_LIST_ID not set - skipping");
    return;
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const text = await res.text();
      console.error("[brevo] Failed to add contact:", res.status, text);
    }
  } catch (error) {
    console.error("[brevo] Failed to add contact:", error);
  }
}
