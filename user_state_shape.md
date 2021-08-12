# Example Redux State
​
```javascript
{
   users: {
      1: {
         id: 1,
         email: "demo@user.com",
         first_name: "John",
         last_name: "Dough",
         birth_date: 12041985,
         img_url: "url",
         gender: "Prefer Not To Answer"
      },
   },
   reservations: {
      1: {
         id: 1,
         user_id: 1,
         restaurant_id: 1,
         number_of_guests: 2,
         date_start: 08/12/2021,
         time_start: 14:00,
      },
   restaurant_reviews: {
      1: {
         id: 1,
         user_id: 1,
         restaurant_id: 1,
         rating: 4,
         comment: "disinfect and rinse",
      },
   user_experience_reviews: {
      1: {
         id: 1,
         user_id: 1,
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
      user: {
         id: 1,
         name: 'Demo'
      }
   },
   errors: [
         "Unauthorized",
         "Incorrect username/password combination",
      ]
}
```
