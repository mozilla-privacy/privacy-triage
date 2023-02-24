# necko-triage
A simple webapp to help sort things out in necko triaging

# triage guide

## Triage and Necko's bug handling pipeline
The purpose of Necko's triage process is to organize "new" networking bugs into their appropriate place for handling.
Not all bugs are "new"; some come from other components, some are being revisited or re-opened.
In general, we want to validate that bugs belong in the networking component (which are our responsibility) and for those that are we want to ensure that we have sufficient information to assign a priority and severity.

Post-triage, a typical bug MAY flow through our handling stages like so:
`Triage -> Review -> Next -> Priority`

We also have bugs that we are `Monitoring` closely that may require further action.

## Triaging

Bugzilla
- UNTRIAGED bugs with no needinfo :  https://mzl.la/2oaZl1K
- UNTRIAGED bugs: https://mzl.la/2wAv7XZ
- MALFORMED bugs (have necko-triaged set but no priority): https://mzl.la/2xXf2jc
- P1 bugs  https://mzl.la/2he1C85
- P2 bugs  https://mzl.la/2yaD1aO
- P3 bugs  (backlog) https://mzl.la/2xcYzEL
- P5 bugs (would take): https://mzl.la/2hdnQXy

Priorities
- P1 bugs (Blocker: get someone assigned ASAP: also EMAIL necko@moz whenever we have a new P1 bug)
- P2 bugs (Active--we intend to work on these now or this quarter)
- P3 bugs (backlog)
- There is no P4--don't use it
- P5 bugs (would take)

Principles
- P1 bugs MUST have a person assigned
- Non-necko people can be assigned to necko bugs just fine
- Bugs filed by wpt-bot should be marked triaged as P5. If something is needed there, someone can ni? one of us.
- If you’re filing a bug you’ll be working on (or as part of a project you’re working on, even if you won’t be working directly on it), please triage appropriately, so as to not overload whoever is on triage that week :-D

Mark as triaged
- Set `[necko-triaged]` in the whiteboard for bugs that have been triaged.
- Set Priority and Severity
- Consider adding `[necko-priority-review]` to the whiteboard to prioritize in the team's workflow
- Emergency items can be put directly into `[necko-priority-queue]`

Requesting more information (when necessary)
- Steps to reproduce. You may also want to confirm they actually reproduce.
- [http logs](https://firefox-source-docs.mozilla.org/networking/http/logging.html) should be submitted to necko@mozilla.com to prevent leaking personal information.
- about:crashes - submit crash data to crash-stats.mozilla.org
- about:support - application and system details

Also
- Review [triage-center](https://mozilla.github.io/triage-center/?component=Core%3ADOM%3A+Networking&component=Core%3ANetworking&component=Core%3ANetworking%3A+Cache&component=Core%3ANetworking%3A+Cookies&component=Core%3ANetworking%3A+DNS&component=Core%3ANetworking%3A+FTP&component=Core%3ANetworking%3A+File&component=Core%3ANetworking%3A+HTTP&component=Core%3ANetworking%3A+JAR&component=Core%3ANetworking%3A+WebSockets) as part of triage duty.

## Post-triage

- `Review` is the bucket of bugs that get reviewed in our regular bug review meeting. 
Selected bugs will may get promoted for action. `Review` bugs should have a whiteboard with `[necko-priority-review]`.
- `Next` is essentially used to label bugs that have already been reviewed and agreed upon as going into the priority queue soon. 
This is useful when the review queue gets a bit bloated. `Next` bugs should have a whiteboard with `[necko-priority-review]` and `[necko-next]`.
- `Priority` is the bucket of bugs that are a team priority. We try to pull our bug fixing efforts from this list and keep it at a limited size. `Priority` bugs should have whiteboard `[necko-priority-queue]` label.
- `Monitoring` is the bucket of bugs that we are closely watching. For example, we may be watching for crash spikes or whether a submitted patch has fixed a particular issue. These are relatively passive bugs that should be moved back into the priority pipeline if necessary. Use the whiteboard label `[necko-monitor]` for this bucket.
