/**
 * Inject affiliate tracking parameters into a Viator product URL.
 *
 * Real format (per Viator docs) typically looks like:
 *   https://www.viator.com/tours/<dest>/<slug>/<productCode>?pid=PID&mcid=MCID&medium=api
 *
 * We treat the inputs as opaque — the real Viator client will hand us a clean
 * product URL, and we append/overwrite the affiliate params. Verify the exact
 * shape against a real product link tomorrow when keys arrive.
 */
export function withAffiliate(url: string): string {
  const partnerId = process.env.VIATOR_PARTNER_ID || "PLACEHOLDER_PID";
  const mcid = process.env.VIATOR_MCID || "42383";

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  parsed.searchParams.set("pid", partnerId);
  parsed.searchParams.set("mcid", mcid);
  parsed.searchParams.set("medium", "api");

  return parsed.toString();
}
