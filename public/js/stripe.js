import axios from 'axios';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51LIaO7LQLs9gbN581HlcDbFn0MWXaGWbNgTZBLaZOgM0hv1kiUSZf38T5u6Ii1n0kSp00iPkN03dnBuGn8yRpD7n00imsjVyal'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) Create  checkout form + charge credit card
  } catch (err) {
    console.log(err);
  }
};
