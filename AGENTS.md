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

- Keep named public content in separate TanStack routes with leaf metadata, because each page must be directly navigable and shareable.
- Keep product data and WhatsApp enquiry construction in the shared browser-safe cheese module so catalog and requests stay consistent.
- Enquiries are prepared client-side and handed to WhatsApp only after explicit user action; the website does not store enquiries or process payments.
- Use global semantic design tokens and the existing Button variants for presentation and controls to keep the visual system consistent.
