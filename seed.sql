CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  username TEXT,
  bio TEXT,
  clerk_id TEXT
);
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  profile_id INT REFERENCES profile(id),
  content TEXT
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id),
  profile_id INT REFERENCES profile(id),
  content TEXT
);


INSERT INTO posts(profile_id, content) VALUES
(1, 'Curious about how I got started with allotment gardening? Follow along as I share the story of my journey from dreamer to proud allotment gardener.'),
(1,'Living in a small space but dreaming of having your own allotment garden? Learn some ingenious tips and tricks to make the most out of your tiny plot.'),
(2, 'Ever wondered why growing your own food feels so satisfying? Join me as I delve into the joys and benefits of allotment gardening and homegrown produce.'),
(3, 'Tired of the same old recipes? Explore a world of delicious possibilities with these mouth-watering recipes made from homegrown allotment produce.'),
(2, 'Ever wondered what a day in the life of an allotment gardener looks like? Join me as I share my seasonal adventures, triumphs, and challenges.'),
(4, 'Discover the magic of organic allotment gardening! Find out why I choose to cultivate my plot using natural methods and how it benefits both me and the environment.');

INSERT INTO comments(post_id, profile_id, content) VALUES 
(1, 1, 'Your journey is so inspiring! I have been thinking about starting my own allotment garden, and your story gives me hope that I can do it too.'),
(2, 1, 'These tips are a game-changer! I never thought I could have an allotment garden in my tiny apartment, but now I am feeling motivated to give it a try.'),
(3, 3, 'Could not agree more! There is something magical about eating food you have grown yourself. It just tastes better and feels more nourishing.'),
(4, 3, 'These recipes look amazing! Cannot wait to try them out with fresh produce from my garden. Thanks for sharing!'),
(5, 2, 'Love following your allotment journey! It is so interesting to see how you navigate each season and overcome challenges along the way.'),
(6, 4, 'Thank you for advocating for organic gardening! It is not only better for our health but also for the planet. Let us keep it green!');