import cyberProtection from "@/assets/cyber-protection.jpg";

export const ProtectionSlide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark p-8" dir="rtl">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            استراتيجيات الحماية والدفاع
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-4">🛡️ الحماية التقنية</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  جدران الحماية المتقدمة (Advanced Firewalls)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  أنظمة كشف التسلل (IDS/IPS)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  التشفير القوي للبيانات
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  النسخ الاحتياطية المنتظمة
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-accent mb-4">📚 التوعية والتدريب</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  تدريب الموظفين على الأمن السيبراني
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  زيادة الوعي بالتهديدات
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  وضع سياسات أمنية واضحة
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  اختبارات الاختراق الدورية
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
              <h3 className="text-xl font-semibold text-primary-glow mb-4">🤝 التعاون الدولي</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary-glow">•</span>
                  تبادل المعلومات الأمنية
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-glow">•</span>
                  التنسيق في مواجهة التهديدات
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-glow">•</span>
                  وضع معايير أمنية موحدة
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={cyberProtection} 
                alt="استراتيجيات الحماية السيبرانية" 
                className="rounded-2xl shadow-glow max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};