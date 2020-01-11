---
title: "Future Development of TFR"
categories:
---

The wiki tfresource.org has faced challenges in the past to secure funding for server fees and maintenance. These issues led to ideas how we could make tfresource.org more resistant against shortcomings in funding. Here are some ideas under discussion.

### 1. Shut it down completely

We would archive the content for future generations, but tfresrouce.org would go dark. The committee ADB45 might survive organizing the ITM conference, but half of the tasks for this committee would disappear.

| *Benefits*|*Drawbacks*|
|--|--|
| Free | The content generated over the last nine years would disappear |
| Almost no effort to implement|The main source of travel forecasting information would be printed materials or static PDF files, which get outdated rather quickly  |
| |No googlable resource |

### 2. Migrate content to Wikipedia and shut down tfresource.org

We would copy the content of tfresource.org to Wikipedia and sunset tfresource.org (or set a re-direct to Wikipedia). TFResource.org and Wikipedia use the same language (MediaWiki), which makes the transfer easier. However, this is not zero effort to transfer, we need a team taking care of this transition. The committee ADB45 might survive organizing the ITM conference, but half of the tasks for this committee would disappear.

| *Benefits*|*Drawbacks*|
|--|--|
|Hosting is free| We would lose TFR branding |
|Technical maintenance is done by Wikipedia | TRB Staff indicated that this would most likely be the end of this committee |
|Essentially hacker-resistant | Should the committee be shut down, there would be no organized effort to populate Wikipedia sites with travel forecasting knowledge unless it was migrated to another committee (i.e. as the Communications subcommittee) |
|Could conceivably get a wider audience for the content at Wikipedia | Wikipedia has vastly different editorial standards, and we would likely need to rewrite much of the content. |

### 3. Host tfresource.org ourselves on Rackspace

Previously, we had the consultant Paine who had rented space on Rackspace to host our site. Paine took care of high-level maintenance and was in charge of communication with Rackspace. As Paine is closing down, we could rent our own space on Rackspace and do high-level maintenance ourselves.

| *Benefits*|*Drawbacks*|
|--|--|
|Transition to our own Rackspace account is easy | We need to find continuous funding to pay the server fee to Rackspace (amount unknown, but probably in the range of $200 to $250 per month) |
| All content would be preserved |We would need committee members to take on high-level maintenance tasks |
| The interface to make changes would not change | Should we ever get hacked again, we will need to fix TFResource ourselves |
| Appearance of the wiki to the public would remain unchanged. | MediaWiki isn't the easiest interface to get started with on the editing side. |

### 4. Migrate content to a static site on Github

The same content would be hosted on Github instead of Rackspace.

| *Benefits*|*Drawbacks*|
|--|--|
| Free to host (except for small fee for the URL tfresource.org usually \~\$14/yr) | Need to transfer content from WikiMedia to mark-up language. Effort is not fully understood yet, but can happen using tools like Pandoc even tools with web interface. |
| Appearance of the wiki to the public would remain similar, URL would not change | Only a selected number of people could directly make changes to the pages. Others could submit a change request, which would need to be handled (accept or reject) by a committee member. (you could actually allow anyone to make changes, but I don't think we want to actually do this). |
| Changes to wiki pages is similar to as it was before, but in a more readable markup language (Markdown)| Some of the more "wiki"-like functionality would be lost, e.g. "Talk" pages. These could be partially replaced with GitHub issues related to page material. |
| We would have total control over the site and the content; many in the industry (including on ADB45) are now familiar with Github-hosted websites |  Every page would need to be converted; the total effort is unknown. |

### 5. Migrate content to a wiki site under WordPress

The major content of the site would be preserved with editing possible.

| *Benefits*|*Drawbacks*|
|--|--|
| Costs are manageable. There would likely be charges for the wiki plugin, hosting, and domain name, about \$120/year. | Need to transfer content from WikiMedia to whatever is supported by the plugin. There are many plugins at various levels of sophistication. "Helpie" seems like a pretty good option, at least for discussion purposes. |
| Appearance of the wiki to the public would remain similar, URL would not change | The number of users would vary with the plugin's capability, but we may want to limit access, if editing is judged to be very difficult. |
| Changes to wiki pages are unknown, but likely OK | There would likely be some loss of functionality. |
| We would have total control over the site and the content. Note: HostGator supports MediaWiki and its advertised costs are not much more than a WordPress site. |The would need to be considerable effort to migrate the current content. |

## Background Information

ADB45 was established in response to a **specific recommendation** found in [Synthesis Report 288 (2007)](SR_288_Metropolitan_Travel_Forecasting_Current_Practice_and_Future_Direction) under the heading "Intergovernmental Cooperation":

-   " A national travel forecasting **handbook** be developed and **kept current** to provide salient information to those practicing travel demand forecasting" (emphasis added)

As ADB45 began work, the "handbook" quickly evolved from a static hardcopy publication to an online environment to facilitate the objective of "keeping current". We experimented with a traditional web-based content management system and concluded that the need for a site-specific webmaster would inhibit community contribution. We settled on a more open "wiki" environment where community members could contribute directly to the site's content.


## References

<http://onlinepubs.trb.org/onlinepubs/sr/sr288summary.pdf>

