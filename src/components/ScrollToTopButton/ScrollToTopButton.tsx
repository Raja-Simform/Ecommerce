export default function ScrollToTopButton() {
  function handleScollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      onClick={handleScollToTop}
      className="fixed p-2 bg-blue-400 rounded-xl  bottom-4 right-4"
    >
      SKip To Top
    </button>
  );
}
