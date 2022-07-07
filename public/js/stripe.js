import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51LIaO7LQLs9gbN581HlcDbFn0MWXaGWbNgTZBLaZOgM0hv1kiUSZf38T5u6Ii1n0kSp00iPkN03dnBuGn8yRpD7n00imsjVyal'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create  checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
