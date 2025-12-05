import Header from "../Components/Header";

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
