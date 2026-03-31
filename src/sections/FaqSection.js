import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { faqs } from '../data/content';
export default function FaqSection() {
    var _a = useState(0), openIndex = _a[0], setOpenIndex = _a[1];
    return (<section id="faq">
      <div className="section-shell">
        <SectionTitle eyebrow="FAQ" title="Questions students ask most" subtitle="If you are curious, you belong here. Everyone starts somewhere."/>
        <div className="space-y-3">
          {faqs.map(function (faq, index) {
            var open = openIndex === index;
            return (<article key={faq.q} className="rounded-2xl border border-blue-100 bg-white shadow-soft">
                <button className="flex w-full items-center justify-between p-5 text-left" onClick={function () { return setOpenIndex(open ? null : index); }} aria-expanded={open}>
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown className={"transition ".concat(open ? 'rotate-180' : '')} size={18}/>
                </button>
                {open && <p className="px-5 pb-5 text-slate-600">{faq.a}</p>}
              </article>);
        })}
        </div>
      </div>
    </section>);
}
