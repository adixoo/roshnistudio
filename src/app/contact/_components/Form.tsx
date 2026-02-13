export default function EnquiryForm() {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-8 shadow">
        <h3 className="border-charcoal/20 mb-6 border-b pb-4 font-serif text-2xl">
          Project Enquiry
        </h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Name
              </label>
              <input
                className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Email Address
              </label>
              <input
                className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Project Location
              </label>
              <input
                className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
                placeholder="City, Country"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Project Type
              </label>
              <select className="focus:ring-primary w-full appearance-none border-none bg-slate-50 px-4 py-3 text-slate-500 transition-all focus:ring-1 dark:bg-slate-800">
                <option>Residential Design</option>
                <option>Wellness Studio</option>
                <option>Furniture Customization</option>
                <option>Commercial Office</option>
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Estimated Budget
            </label>
            <select className="focus:ring-primary w-full appearance-none border-none bg-slate-50 px-4 py-3 text-slate-500 transition-all focus:ring-1 dark:bg-slate-800">
              <option>$10k - $25k</option>
              <option>$25k - $50k</option>
              <option>$50k - $100k</option>
              <option>$100k+</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Message / Vision
            </label>
            <textarea
              className="focus:ring-primary w-full border-none bg-slate-50 px-4 py-3 transition-all focus:ring-1 dark:bg-slate-800"
              placeholder="Tell us about your space..."
              rows={4}
              defaultValue={""}
            />
          </div>
          <button
            className="bg-primary hover:bg-opacity-90 shadow-primary/20 w-full py-4 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all"
            type="submit"
          >
            Send Project Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
