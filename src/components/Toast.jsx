import { Check } from "lucide-react";

export default function Toast({ message }) {
  return (
    <div className={`toast ${message ? "toast--show" : ""}`} role="status">
      <span className="toast__icon">
        <Check size={16} strokeWidth={2.4} />
      </span>
      <span>{message}</span>
    </div>
  );
}
