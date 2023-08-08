/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("restaurant-w3school");
/*
Search for documents in the current collection.
Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' 
and achieved a grade point 'A' not belongs to the borough Brooklyn.
The document must be displayed according to the cuisine in descending order. 
*/
db.restaurant
  .find({
    $and: [
      { cuisine: { $ne: "American" } },
      { "grades.grade": { $eq: "A" } },
      { borough: { $ne: "Brooklyn" } },
    ],
  })
  .sort({ cuisine: -1 });

//14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
use("restaurant-w3school");
db.restaurant.find(
  { name: /^Wil/ },
  { borough: 1, cuisine: 1, restaurant_id: 1, name: 1 }
);
//15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
use("restaurant-w3school");
db.restaurant.find(
  { name: /ces$/ },
  { borough: 1, cuisine: 1, restaurant_id: 1, name: 1 }
);

//16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
use("restaurant-w3school");
db.restaurant.find(
  { name: /.*Reg.*/ },
  { borough: 1, cuisine: 1, restaurant_id: 1, name: 1 }
);

//17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { borough: "Bronx" },
    { $or: [{ cuisine: "American" }, { cuisine: "Chinese" }] },
  ],
});
//18 Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
use("restaurant-w3school");
db.restaurant.find(
  { borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);

//19 Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
use("restaurant-w3school");
db.restaurant.find(
  { borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);

//20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.
use("restaurant-w3school");
db.restaurant.find(
  {
    "grades.score": { $lt: 10 },
  },
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);
// 21. Write a MongoDB query to find the restaurant Id, name,
// borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees'
// or restaurant's name begins with letter 'Wil'.
use("restaurant-w3school");
db.restaurant.find(
  {
    $or: [
      { name: /^Wil/ },
      {
        $and: [
          { cuisine: { $ne: "American" } },
          { cuisine: { $ne: "Chinese" } },
        ],
      },
    ],
  },
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);
//22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants
// which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
use("restaurant-w3school");
db.restaurant.find({
  "grades.grade": "A",
  "grades.score": 11,
  "grades.date": ISODate("2014-08-11T00:00:00Z"),
});
// 23. Write a MongoDB query to find the restaurant Id, name and grades for
// those restaurants where the 2nd element of grades array contains a grade of "A"
// and score 9 on an ISODate "2014-08-11T00:00:00Z".
use("restaurant-w3school");
db.restaurant.find(
  {
    "grades.1.grade": "A",
    "grades.1.score": 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z"),
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);
// 24.Write a MongoDB query to find the restaurant Id, name, address and geographical location
// for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52..
use("restaurant-w3school");
db.restaurant.find(
  {
    "address.coord.1": { $gt: 42, $lte: 52 },
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);
// 25.  Write a MongoDB query to arrange the name of
// the restaurants in ascending order along with all the columns.
use("restaurant-w3school");
db.restaurant.find().sort({ name: 1 });
// 26. Write a MongoDB query to arrange the name of
// the restaurants in descending along with all the columns.
use("restaurant-w3school");
db.restaurant.find().sort({ name: -1 });
// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order
// and for that same cuisine borough should be in descending order.
use("restaurant-w3school");
db.restaurant.find().sort({ cuisine: 1, borough: -1 });
// 28. Write a MongoDB query to know whether all the addresses contains the street or not.
use("restaurant-w3school");
db.restaurant.find({
  "address.street": {
    $exists: true,
  },
});
// 29. Write a MongoDB query which will select all
// documents in the restaurants collection
// where the coord field value is Double.
use("restaurant-w3school");
db.restaurant
  .find({
    "address.coord": {
      $type: "double",
    },
  })
  .count();

//30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants
//which returns 0 as a remainder after dividing the score by 7.
use("restaurant-w3school");
db.restaurant.find(
  {
    "grades.score": { $mod: [7, 0] },
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);
// 31. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine
// for those restaurants which contains 'mon' as three letters somewhere in its name.
use("restaurant-w3school");
db.restaurant.find(
  { name: /.*mon.*/i },
  {
    name: 1,
    borough: 1,
    "address.coord": 1,
    cuisine: 1,
  }
);

//32. Write a MongoDB query to find the restaurant name, borough, longitude and latitude
//and cuisine for those restaurants which contain 'Mad' as first three letters of its name.
use("restaurant-w3school");
db.restaurant.find(
  {
    name: {
      $regex: /^Mad/,
    },
  },
  {
    name: 1,
    borough: 1,
    "address.coord": 1,
    cuisine: 1,
  }
);
//33. Write a MongoDB query to find the restaurants that
//have at least one grade with a score of less than 5.
use("restaurant-w3school");
db.restaurant.find({
  "grades.score": { $lt: 5 },
});
// 34. Write a MongoDB query to find the restaurants that have at least one grade
// with a score of less than 5 and that are located in the borough of Manhattan.
use("restaurant-w3school");
db.restaurant.find({
  "grades.score": { $lt: 5 },
  borough: { $eq: "Manhattan" },
});
//35. Write a MongoDB query to find the restaurants that have at least one grade with a score of less than 5
//and that are located in the borough of Manhattan or Brooklyn.
use("restaurant-w3school");
db.restaurant.find({
  "grades.score": { $lt: 5 },
  borough: { $in: ["Manhattan", "Brooklyn"] },
});
//36. Write a MongoDB query to find the restaurants that have at least one grade with a score of less than 5 and
//that are located in the borough of Manhattan or Brooklyn, and their cuisine is not American.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }] },
    { "grades.score": { $lt: 5 } },
    { cuisine: { $ne: "American" } },
  ],
});
// 37. Write a MongoDB query to find the restaurants that have at least one grade with a score
// of less than 5 and that are located in the borough of Manhattan or Brooklyn, and their cuisine is not American or Chinese.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    {
      $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }],
    },
    {
      $nor: [{ cuisine: "American" }, { cuisine: "Chinese" }],
    },
    {
      grades: {
        $elemMatch: {
          score: { $lt: 5 },
        },
      },
    },
  ],
});
//38. Write a MongoDB query to find the restaurants that
//have a grade with a score of 2 and a grade with a score of 6.
use("restaurant-w3school");
db.restaurant.find({
  $and: [{ "grades.score": 2 }, { "grades.score": 6 }],
});
// 39. Write a MongoDB query to find the restaurants that have a grade with a score
// of 2 and a grade with a score of 6 and are located in the borough of Manhattan.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { "grades.score": 2 },
    { "grades.score": 6 },
    { borough: "Manhattan" },
  ],
});
//40. Write a MongoDB query to find the restaurants that have a grade
//with a score of 2 and a grade with a score of 6 and are located in
//the borough of Manhattan or Brooklyn.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { "grades.score": 2 },
    { "grades.score": 6 },
    { borough: { $in: ["Manhattan", "Brooklyn"] } },
  ],
});
// 41. Write a MongoDB query to find the restaurants that have a grade with a score of 2
// and a grade with a score of 6 and are located in the borough of Manhattan or Brooklyn,
// and their cuisine is not American.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { "grades.score": 2 },
    { "grades.score": 6 },
    { borough: { $in: ["Manhattan", "Brooklyn"] } },
    { cuisine: { $ne: "American" } },
  ],
});
// 42. Write a MongoDB query to find the restaurants that have a grade with a score of 2
// and a grade with a score of 6 and are located in the borough of Manhattan or Brooklyn,
// and their cuisine is not American or Chinese.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    { borough: { $in: ["Manhattan", "Brooklyn"] } },
    { cuisine: { $nin: ["American", "Chinese"] } },
    { grades: { $elemMatch: { score: 2 } } },
    { grades: { $elemMatch: { score: 6 } } },
  ],
});
//43 Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6.
use("restaurant-w3school");
db.restaurant.find({
  $or: [{ "grades.score": 2 }, { "grades.score": 6 }],
});
//44. Write a MongoDB query to find the restaurants that have a grade with a score of 2
//or a grade with a score of 6 and are located in the borough of Manhattan.
use("restaurant-w3school");
db.restaurant.find({
  $or: [{ "grades.score": 2 }, { "grades.score": 6 }],
  $and: [{ borough: "Manhattan" }],
});
//45. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6 and are located in the borough of Manhattan or Brooklyn.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    {
      $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }],
    },
    {
      $or: [{ "grades.score": 2 }, { "grades.score": 6 }],
    },
  ],
});
// 46. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6 and are located in the borough of Manhattan or Brooklyn, and their cuisine is not American.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    {
      $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }],
    },
    {
      $or: [{ "grades.score": 2 }, { "grades.score": 6 }],
    },
    { cuisine: { $ne: "American" } },
  ],
});
// 47. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6 and are located in the borough of Manhattan or Brooklyn, and their cuisine is not American or Chinese.
use("restaurant-w3school");
db.restaurant.find({
  $and: [
    {
      $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }],
    },
    {
      $or: [{ "grades.score": 2 }, { "grades.score": 6 }],
    },
    { cuisine: { $nin: ["American", "Chinese"] } },
  ],
});
//51. Write a MongoDB query to find the average score for each restaurant.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $group: { _id: "$name", avgScore: { $avg: "$grades.score" } } }
);
//52. Write a MongoDB query to find the highest score for each restaurant.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $group: { _id: "$name", highScore: { $max: "$grades.score" } } }
);
//53. Write a MongoDB query to find the lowest score for each restaurant.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $group: { _id: "$name", minScore: { $min: "$grades.score" } } }
);
//54 Write a MongoDB query to find the count of restaurants in each borough.
use("restaurant-w3school");
db.restaurant.aggregate({ $group: { _id: "$borough", count: { $sum: 1 } } });
//55: Write a MongoDB query to find the count of restaurants for each cuisine and borough.
use("restaurant-w3school");
db.restaurant.aggregate({
  $group: {
    _id: {
      cuisine: "$cuisine",
      borough: "$borough",
    },
    count: {
      $sum: 1,
    },
  },
});
//56: Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each cuisine.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $match: { "grades.grade": "A" } },
  {
    $group: {
      _id: "$cuisine",
      count: {
        $sum: 1,
      },
    },
  }
);
//57: Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each borough.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $match: { "grades.grade": "A" } },
  {
    $group: {
      _id: "$borough",
      count: {
        $sum: 1,
      },
    },
  }
);
//58: Write a MongoDB query to find the count of restaurants that received a grade of 'A' for each cuisine and borough.
use("restaurant-w3school");
db.restaurant.aggregate(
  { $unwind: "$grades" },
  { $match: { "grades.grade": "A" } },
  {
    $group: {
      _id: {
        cuisine: "$cuisine",
        borough: "$borough",
      },
      count: {
        $sum: 1,
      },
    },
  }
);
//59: Write a MongoDB query to find the number of restaurants that have been graded in each month of the year.
use("restaurant-w3school");
db.restaurant.aggregate([
  { $unwind: "$grades" },
  {
    $project: {
      month: { $month: { $toDate: "$grades.date" } },
      year: { $year: { $toDate: "$grades.date" } },
    },
  },
  {
    $group: {
      _id: {
        month: "$month",
        year: "$year",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1,
    },
  },
]);
//61. Write a MongoDB query to find the average score for each cuisine.
use("restaurant-w3school");
db.restaurant.aggregate([
  {
    $unwind: "$grades",
  },
  {
    $group: {
      _id: "$cuisine",
      avgScore: {
        $avg: "$grades.score",
      },
    },
  },
]);
//67. Write a MongoDB query to find the name and address of the restaurants that received a grade of 'A' on a specific date.
use("restaurant-w3school");
db.restaurant.find(
  {
    grades: {
      $elemMatch: {
        date: {
          $eq: ISODate("2013-07-22T00:00:00Z"),
        },
        grade: {
          $eq: "A",
        },
      },
    },
  },
  {
    name: 1,
    address: 1,
    _id: 1,
  }
);
//68. Write a MongoDB query to find the name and address of the restaurants that received a grade of 'B' or 'C' on a specific date.
use("restaurant-w3school");
db.restaurant.find(
  {
    grades: {
      $elemMatch: {
        date: ISODate("2013-04-05"),
        grade: { $in: ["B", "C"] },
      },
    },
  },
  {
    name: 1,
    address: 1,
  }
);
//69. Write a MongoDB query to find the name and address of the restaurants that have at least one 'A' grade and one 'B' grade.
use("restaurant-w3school");
db.restaurant.find(
  {
    $and: [{ "grades.grade": "A" }, { "grades.grade": "B" }],
  },
  {
    name: 1,
    address: 1,
  }
);
//70: Write a MongoDB query to find the name and address of the restaurants that have at least one 'A' grade and no 'B' grades.
use("restaurant-w3school");
db.restaurant.find(
  {
    $and: [{ "grades.grade": "A" }, { "grades.grade": { $not: { $eq: "B" } } }],
  },
  {
    name: 1,
    address: 1,
  }
);
//73: Write a MongoDB query to find the name and address of the restaurants that have the word 'coffee' in their name.
use("restaurant-w3school");
db.restaurant.find(
  {
    name: {
      $regex: /coffee/i,
    },
  },
  {
    name: 1,
    address: 1,
  }
);
//74: Write a MongoDB query to find the name and address of the restaurants that have a cuisine that starts with the letter 'B'.
use("restaurant-w3school");
db.restaurant.find(
  {
    cuisine: {
      $regex: /^B/,
    },
  },
  {
    name: 1,
    address: 1,
  }
);
//78. Write a MongoDB query to find the restaurants achieved highest average score.
use("restaurant-w3school");
db.restaurant.aggregate([
  { $unwind: "$grades" },
  {
    $group: {
      _id: "$restaurant_id",
      avgScore: { $avg: "$grades.score" },
    },
  },
  { $sort: { avgScore: -1 } },
  { $limit: 1 },
  { $project: { _id: 1, avgScore: 1 } },
]);
//79: Write a MongoDB query to find all the restaurants with the highest number of "A" grades.
use("restaurant-w3school");
db.restaurant.aggregate([
  {
    $unwind: "$grades",
  },
  {
    $match: { "grades.grade": "A" },
  },
  {
    $group: {
      _id: "$restaurant_id",
      restaurants: { $push: "$_id" },
    },
  },
  { $sort: { _id: -1 } },
  { $limit: 1 },
  { $project: { restaurants: 1 } },
]);
//80: 
