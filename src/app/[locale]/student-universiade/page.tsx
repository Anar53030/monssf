"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useParams } from "next/navigation";

export default function OyutniiUniversiade() {
  const params = useParams();
  return (
    <div className="outter-wrapper body-wrapper">
      <div className="wrapper ad-pad clearfix">
        <div className="main-content col-3-4">
          <h2 className="title">Оюутны универсиад</h2>
          <hr />
          <div className="clearfix teams">
            <h3>
              <figure>
                <Image
                  src="http://monssf.mn/media/mssf/content/Games2020/neelt/_MG_8868.jpg"
                  alt="universiade"
                  width={500}
                  height={500}
                />
              </figure>
              <br />
            </h3>
            <p>
              Монголын оюутны спортын &quot;Универсиад&quot;&nbsp;наадам нь 2
              жил тутамд нэг удаа сондгой&nbsp;тоотой жилд МОСХ-ноос эрхлэн
              холбогдох&nbsp;байгууллагуудтай хамтран зохион&nbsp;явуулдаг.
              Наадамд өвлийн төрлөөр тэшүүр,&nbsp;цана, тэшүүр, зуны спортын
              төрлүүдээр&nbsp;аэробек, байт харваа, бокс,
              буудлага,&nbsp;волейбол, гандбол, жүдо, заалны
              хөлбөмбөг,&nbsp;футзал, модон бөмбөг, нийтийн гүйлт,&nbsp;сагсан
              бөмбөг, спортын бүжиг, таэквондо,&nbsp;үндэсний бөх, хөл
              бөмбөг,хөнгөн атлетик,&nbsp;чөлөөт бөх,шатар, ширээний
              теннис,олс&nbsp;таталт, спорт аялалын спортын
              төрлүүд&nbsp;хөтөлбөрт багтдаг.
              <br />
            </p>
          </div>
        </div>
        {/* Start Main Sidebar  */}
        <aside className="widget">
          <div className="widget">
            <h3 className="widget-title">Холбооны үйл ажиллагааны тухай</h3>
            <br />
            <ul className="list-1 widget-list">
              <li>
                <Link
                  href={`/${params.locale}/student-universiade`}
                  className="noajax"
                >
                  Оюутны универсиад
                </Link>
              </li>
              <li>
                <Link
                  href={`/${params.locale}/oyutniiUASHT`}
                  className="noajax"
                >
                  Оюутны УАШТ
                </Link>
              </li>
              <li>
                <Link
                  href={`/${params.locale}/foreign-events`}
                  className="noajax"
                >
                  Гадаад арга хэмжээ
                </Link>
              </li>
              <li>
                <Link
                  href={`/${params.locale}/activities`}
                  className="noajax"
                >
                  Үйл ажиллагаа
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h3>Мэдээлэл</h3>
            <ul className="widget-event-list">
              <li>
                <Link href="/naadam">
                  <Image
                    className="left stay"
                    src="http://monssf.mn/media/mssf/content/2024/.4646081716254200_200_x_200.JPG"
                    alt="МОНГОЛЫН ОЮУТНЫ СПОРТЫН VI НААДАМ"
                    width={200}
                    height={200}
                  />
                  <div className="date">15 Aug</div>
                  <h6 className="title">
                    МОНГОЛЫН ОЮУТНЫ СПОРТЫН VI НААДАМ Ө...
                  </h6>
                </Link>
              </li>
              <li>
                <Link href="/volleyballChampionship">
                  <Image
                    className="left stay"
                    src="http://monssf.mn/media/mssf/content/2024/.7150325832898783150_200_x_200.JPG"
                    alt="ВОЛЕЙБОЛЫН ОЮУТНЫ АВАРГУУД ТОДОРЛОО"
                    width={200}
                    height={200}
                  />
                  <div className="date">15 Aug</div>
                  <h6 className="title">ВОЛЕЙБОЛЫН ОЮУТНЫ АВАРГУУД ТОДОРЛОО</h6>
                </Link>
              </li>
              <li>
                <Link href="/tableTenniChampionship">
                  <Image
                    className="left stay"
                    src="http://monssf.mn/media/mssf/content/2024/.2040699223373456625_200_x_200.jpg"
                    alt="ШИРЭЭНИЙ ТЕННИСНИЙ ОЮУТАН ТАМИРЧИД"
                    width={200}
                    height={200}
                  />
                  <div className="date">15 Aug</div>
                  <h6 className="title">
                    ШИРЭЭНИЙ ТЕННИСНИЙ ОЮУТАН ТАМИРЧИД ...
                  </h6>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
