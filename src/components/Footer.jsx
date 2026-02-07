function Footer() {
  return (
    <footer className="bg-slate-100 border-t mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-3 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Todo App — Built with React & Tailwind
      </div>
    </footer>
  );
}

export default Footer;
