// /app/api/getChatScript/route.js

import { NextResponse } from 'next/server';

export async function GET() {
    const script = `
    (function(i,s,g,r,j,y,b,p,t,z,a){a=s.createElement(r),a.async=1,a.src=g.concat(b,j,b,y,p,j),s.head.appendChild(a),a.onload = function(){opa.init(g,t,z)}})(window,document,'https://atendimento.intercert.com.br','script','js','opa','/','.','658d7cd38059d3c55382b28b','{"google_credential":"AIzaSyDde1OlXC3SRVAdhUxnINDAB2ib5smwhpU","google_oauth":"676602925127-9uank6gphvvoqq0rqnsuns1t61mopaql.apps.googleusercontent.com","facebook_appid":"","permitir_login_anonimo":""}');
  `;

    return new NextResponse(script, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}