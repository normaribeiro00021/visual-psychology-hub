<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the visual catalog demo data in `src/lib/catalog.ts` separate from the real Cloud tables; it permits an editorial preview without pretending demo purchases grant access.
- Keep protected PDFs in private `protected-materials` storage and rely on entitlement-aware storage policy; public URLs would bypass purchase access.
- Register the generated PWA worker only outside development and Lovable previews; cached app shells must never make previews stale.
- Validate admin role inside every privileged server function before using the admin client; a hidden admin page is not an authorization boundary.

- Keep demo cards labeled as preview; signed-in actual entitlements are shown separately so mock ownership never claims a purchase.
- Use a provider-verified webhook for checkout events before granting entitlements; checkout platform and signing secret must be supplied before production integration.
