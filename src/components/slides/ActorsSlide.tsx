import cyberActors from "@/assets/cyber-actors.jpg";

export const ActorsSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-dark p-8 py-16" dir="rtl">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            الجهات الفاعلة في الحروب السيبرانية
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={cyberActors} 
                alt="الجهات الفاعلة في الحروب السيبرانية" 
                className="rounded-2xl shadow-glow max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-destructive mb-4">🏛️ الدول والحكومات</h3>
              <ul className="space-y-2 text-foreground">
                <li>• وحدات الحرب السيبرانية العسكرية</li>
                <li>• أجهزة الاستخبارات الرقمية</li>
                <li>• الهجمات الاستراتي��ية والتجسس</li>
                <li>• استهداف البنى التحتية الحيوية</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-accent mb-4">🏴‍☠️ الجماعات الإجرامية</h3>
              <ul className="space-y-2 text-foreground">
                <li>• عصابات الفدية المنظمة</li>
                <li>• شبكات سرقة البيانات المالية</li>
                <li>• تجارة المعلومات في الديب ويب</li>
                <li>• الابتزاز الإلكتروني</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">✊ النشطاء الرقميون</h3>
              <ul className="space-y-2 text-foreground">
                <li>• جماعات Anonymous</li>
                <li>• المتظاهرون الرقميون</li>
                <li>• كشف الفساد والانتهاكات</li>
                <li>• التحقيق الاستقصائي الرقمي</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary-glow mb-4">🏢 التجسس الصناعي</h3>
              <ul className="space-y-2 text-foreground">
                <li>• سرقة الأسرار التجارية</li>
                <li>• التجسس على المنافسين</li>
                <li>• سرقة الملكية الفكرية</li>
                <li>• التلاعب في الأسواق</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};