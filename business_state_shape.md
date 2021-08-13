# Example Redux State
​
```javascript
{
   businesses: {
      1: {
         id: 1,
         email: "monte@business.com",
         business_name: "TheFlaggship Group",
         first_name: "Monte",
         last_name: "Flagg",
      },
   },
   restaurants: {
      1: {
         id: 1,
         name: "Crazy Rock'N Sushi",
         phone_number: "626-444-4444",
         address_id: 1,
         business_id: 1,
         description: "description",
         price_range: 2,
         cuisine_id: 1
      },
   restaurant_reviews: {
      1: {
         id: 1,
         user_id: 1,
         restaurant_id: 1,
         rating: 4,
         comment: "disinfect and rinse",
      },
   business_experience_reviews: {
      1: {
         id: 1,
         business_id: 1,
         comment: "disinfect and rinse",
         photo: "url"
      },
   rewards: {
      1: {
         id: 1,
         user_id: 1,
         restaurant_id: 1,
         reward_amount: 40
      },
      2: {
         id: 2,
         user_id: 1,
         restaurant_id: 2,
         reward_amount: 20
      },

   session: {
      business: {
         id: 1,
         first_name: 'Monte',
         business_name: "TheFlaggShip Group"
      }
   },
   errors: [
         "Unauthorized",
         "Incorrect username/password combination",
      ]
}
```
