import { FaStar } from "react-icons/fa";

function Rating({ value = 0, total = 5 }) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(total)].map((_, i) => (
        <FaStar
          key={i}
          color={i < value ? "#ffc107" : "#ddd"} // nếu nhỏ hơn value thì vàng, ngược lại xám
          size={24}
        />
      ))}
    </div>
  );
}

export default Rating;
