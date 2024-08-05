// /app/api/getChatScript/route.js

import { NextResponse } from 'next/server';

export async function GET() {
    const script = `
    <script>
      (function(i,s,g,r,j,y,b,p,t,z,a){
        a=s.createElement(r),
        a.async=1,
        a.src=g.concat(b,j,b,y,p,j),
        s.head.appendChild(a),
        a.onload = function(){opa.init(g,t,z)}
      })(window,document,'https://atendimento.intercert.com.br','script','js','opa','/','.','6617e0937755ae29fd0608b2','{
        "google_credential":"AIzaSyAhddHt7QCcfgMnSj1miK1HNq92hzHHtys",
        "google_oauth":"181305973380-9jbl84uic2oi5nqq406gkt9jmkvd9f8u.apps.googleusercontent.com",
        "facebook_appid":"",
        "permitir_login_anonimo":"on"
      }');
    </script>
  `;

    return new NextResponse(script, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}