module.exports = (avatar) => {
    avatar = avatar.replace("-sign", "")
    avatar = avatar.replace(/\?.*/,'');
    if (avatar.includes("aweme")) avatar = avatar.replace("100x100", "720x720")
    else avatar = avatar.replace("100x100", "300x300")
    return avatar
}