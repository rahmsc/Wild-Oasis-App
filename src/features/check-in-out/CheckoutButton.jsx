import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="alternative"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
      color="red"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
