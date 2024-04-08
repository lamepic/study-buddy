function Footer() {
  return (
    <div>
      <hr />
      <div className="py-4 text-slate-500 container">
        <div className="flex items-center justify-between">
          <p className="font-bold">Study Buddy</p>
          <p className="text-sm">
            Made with ❤️ for students &copy; {new Date().getUTCFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
