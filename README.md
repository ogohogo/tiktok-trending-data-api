# tiktok-trending-data
Repo that scrapes discovery data from TikTok!

This repo scrapes TikTok's Web Discovery API every 1 hour and makes commit whenever it detects any change.
It scrapes data from "t.tiktok.com", "www.tiktok.com" and "m.tiktok.com". All of them show different trending data, not sure why. From my experience "t.tiktok.com" is the best and most reliable endpoint.

Inspired by antiops' TikTok Trending Data (https://github.com/antiops/tiktok-trending-data).

# Features:

* Avatars available in 4 resolutions and 2 extensions (total of 8)
* Avatars never expire! (TikTok made user avatars expire after 24 hours)
* Nice JSON formatting
* Shows trending users, hashtags and songs!