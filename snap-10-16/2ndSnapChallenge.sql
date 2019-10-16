SELECT tweet.tweetContent, profile.profileAtHandle
FROM like
INNER JOIN like ON like.likeTweetId = tweet.tweetId
INNER JOIN profile ON like.likeProfileId = profile.profileId
WHERE tweet.tweetId = UNHEX("0536faef082b454e9d444cdbe7887d7a");