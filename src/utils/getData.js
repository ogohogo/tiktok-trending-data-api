const fs = require("fs")
const fetch = require("node-fetch")

const convertAvatar = require("./convertAvatar");

module.exports = async () => {
    const data = await fetch("https://t.tiktok.com/node/share/discover/", {
        headers: {
            'Cookie': 'tt_webid=6975244404352881414; tt_webid_v2=6975244404352881414; adblock=0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
        }
    }).then(res => res.json())

    let tempArray = {
        user: [],
        hashtag: [],
        music: []
    };

    data.body[0].exploreList.forEach(user => {
        user = user.cardItem
        user.cover = convertAvatar(user.cover)
        user.subTitle = user.subTitle

        tempArray.user.push({
            userId: user.id,
            secUserId: user.extraInfo.secUid,
            avatar: user.cover,
            id: user.subTitle,
            name: user.title,
            bio: user.description,
            verified: user.extraInfo.verified,
            stats: {
                followers: parseInt(user.extraInfo.fans),
                likes: parseInt(user.extraInfo.likes)
            }
        })
    })

    data.body[1].exploreList.forEach(tag => {
        tag = tag.cardItem

        tempArray.hashtag.push({
            challengeId: tag.id,
            avatar: convertAvatar(tag.cover),
            description: tag.description,
            name: tag.title,
            stats: {
                views: parseInt(tag.extraInfo.views)
            }
        })
    })

    data.body[2].exploreList.forEach(music => {
        music = music.cardItem

        tempArray.music.push({
            musicId: music.id,
            avatar: convertAvatar(music.cover),
            musicInfo: {
                author: music.description,
                title: music.title,
                playUrl: music.extraInfo.playUrl[0]
            },
            stats: {
                posts: music.extraInfo.posts
            }
        })
    })

    return fs.writeFileSync("../discover.json", JSON.stringify(tempArray, null, 2), tempArray)
}