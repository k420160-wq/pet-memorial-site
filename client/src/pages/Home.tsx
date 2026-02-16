import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Calendar, Clock, Train, Car } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * 和モダン × ミニマリズム
 * デザインフィロソフィー: 余白の美学、自然素材の質感、控えめな色彩、静謐さと温かみの両立
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApplyClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfKuo6eNh9689hfMVBt8UJLTNf6ThmbcdsyDl9PEwnTkqzOdg/viewform?usp=header", "_blank");
  };

  return (
    <div className="min-h-screen bg-background washi-texture">
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663290845198/hFtGlpFxVRqJmrcN.jpg"
          alt="合同納骨式の様子"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`relative z-20 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/90 text-sm md:text-base mb-4 tracking-wider font-light">アーバンペット葬儀社</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wide leading-tight">
            合同納骨式のご案内
          </h1>
          <div className="space-y-3 text-white/95 text-lg md:text-xl">
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>日時：2026年4月5日（日）</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>午後2時より（受付1時半～）</span>
            </p>
          </div>
        </div>
      </section>

      {/* 開催場所セクション */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">開催場所</h2>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>正覚寺（墨田区八広）</span>
            </div>
          </div>
        </div>
      </section>

      {/* 参加情報セクション */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">参加について</h2>
                
                <div className="prose prose-lg max-w-none mb-8 text-foreground/90">
                  <p className="text-center mb-6">参加希望の方は下記よりお申込ください。</p>
                  <p className="text-center text-red-600 font-medium mb-2">
                    申込の締切は前日まで：<span className="font-bold">4月2日（木曜日）</span>となります。
                  </p>
                  <p className="text-center mb-8">ご参加の方は当日直接参加の申し込みでも結構です。</p>
                </div>

                {/* 料金表 */}
                <div className="mb-10">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="text-center p-4 bg-background rounded">
                      <p className="text-sm text-muted-foreground mb-2">参加費</p>
                      <p className="text-2xl font-bold text-primary">無料</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded">
                      <p className="text-sm text-muted-foreground mb-2">埋葬</p>
                      <p className="text-2xl font-bold text-primary">¥0-</p>
                    </div>
                    <div className="col-span-2 text-center p-4 bg-background rounded">
                      <p className="text-sm text-muted-foreground mb-2">塔婆</p>
                      <p className="text-2xl font-bold text-primary">¥3000-</p>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground mt-6 px-4">
                    （埋葬をお申込みいただきますと並進の際、ペットちゃんのお名前を読み上げていただけます。）
                  </p>
                </div>

                {/* 申し込みボタン */}
                <div className="text-center">
                  <Button
                    onClick={handleApplyClick}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-sm transition-all duration-300 hover:shadow-lg"
                  >
                    参加申し込み
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 動画セクション */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">ペット火葬・供養/合同納骨式の流れ</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EsxqL6pCe1A"
                title="ペット火葬・供養/合同納骨式の流れ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 施設紹介セクション */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">天切な思い出をいつまでも</h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              家族の一員として大切にお見送りをさせていただきます。
              亡きペットちゃんと、ずっと一緒にいたいあなたのために。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663290845198/ABBTGQiNjTHxqHya.jpeg"
                  alt="正覚寺の外観"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-center text-muted-foreground">正覚寺の外観</p>
              </div>
              <div className="space-y-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663290845198/vLXngoXdgoSatNmd.jpg"
                  alt="本堂内部"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-center text-muted-foreground">本堂内部</p>
              </div>
              <div className="space-y-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663290845198/DvWWbQRbZTiTwZCf.jpg"
                  alt="供養塔"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-center text-muted-foreground">供養塔</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス情報セクション */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">アクセス</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Car className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">お車でお越しの場合</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        駐車場をご用意しておりますが、台数限定ですので、満車になり次第近隣のパーキングをご利用いただくことになります。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Train className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">電車でお越しの場合</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        京成ときぶね駅より徒歩8分、東武ときぶね駅より徒歩13分ほどになります。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9!2d139.826!3d35.719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQzJzEyLjciTiAxMznCsDQ5JzMyLjciRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="正覚寺の地図"
              />
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:03-3613-1321" className="text-primary hover:underline font-medium">
                  03-3613-1321
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2">天王寺山 正覚寺</p>
              <p className="text-sm text-muted-foreground">東京都墨田区八広</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 border-t border-border/50 bg-secondary/20">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 アーバンペット葬儀社 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
