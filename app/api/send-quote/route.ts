import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, objetivo, possuiSite, prazo, orcamento, detalhes } = body

    // Validate required fields
    if (!name || !email || !objetivo) {
      return NextResponse.json({ error: "Nome, email e objetivo são obrigatórios" }, { status: 400 })
    }

    // Use Resend to send email
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.TO_EMAIL || "kicstecnologia.dev@gmail.com" // Email onde você quer receber

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada")
      return NextResponse.json({ error: "Configuração de email pendente" }, { status: 500 })
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kics Tech Website <onboarding@resend.dev>", // Resend verified domain
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nova Solicitação de Orçamento - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #4169E1 0%, #00CED1 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #4169E1; }
                .section-title { color: #4169E1; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
                .field { margin-bottom: 12px; }
                .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
                .value { color: #333; }
                .footer { text-align: center; color: #666; margin-top: 20px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">Nova Solicitação de Orçamento</h1>
                  <p style="margin: 10px 0 0 0;">Kics Tech Website</p>
                </div>
                
                <div class="content">
                  <div class="section">
                    <div class="section-title">📋 Informações de Contato</div>
                    <div class="field">
                      <span class="label">Nome:</span>
                      <span class="value">${name}</span>
                    </div>
                    <div class="field">
                      <span class="label">E-mail:</span>
                      <span class="value">${email}</span>
                    </div>
                    ${
                      phone
                        ? `
                    <div class="field">
                      <span class="label">WhatsApp:</span>
                      <span class="value">${phone}</span>
                    </div>
                    `
                        : ""
                    }
                  </div>

                  <div class="section">
                    <div class="section-title">🎯 Sobre o Projeto</div>
                    <div class="field">
                      <span class="label">Objetivo:</span>
                      <span class="value">${objetivo}</span>
                    </div>
                    ${
                      possuiSite
                        ? `
                    <div class="field">
                      <span class="label">Possui site:</span>
                      <span class="value">${possuiSite === "sim" ? "Sim" : possuiSite === "nao" ? "Não" : "Em andamento"}</span>
                    </div>
                    `
                        : ""
                    }
                  </div>

                  ${
                    prazo || orcamento
                      ? `
                  <div class="section">
                    <div class="section-title">⏱️ Prazo e Investimento</div>
                    ${
                      prazo
                        ? `
                    <div class="field">
                      <span class="label">Prazo:</span>
                      <span class="value">${prazo}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      orcamento
                        ? `
                    <div class="field">
                      <span class="label">Orçamento:</span>
                      <span class="value">${orcamento}</span>
                    </div>
                    `
                        : ""
                    }
                  </div>
                  `
                      : ""
                  }

                  ${
                    detalhes
                      ? `
                  <div class="section">
                    <div class="section-title">📝 Detalhes do Projeto</div>
                    <div class="field">
                      <p class="value" style="margin: 0; white-space: pre-wrap;">${detalhes}</p>
                    </div>
                  </div>
                  `
                      : ""
                  }

                  <div class="footer">
                    <p>Este email foi enviado automaticamente através do formulário de contato do site Kics Tech.</p>
                    <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Erro ao enviar email:", data)
      return NextResponse.json({ error: "Erro ao enviar email", details: data }, { status: response.status })
    }

    console.log("[v0] Email enviado com sucesso:", data)
    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("[v0] Erro no envio de email:", error)
    return NextResponse.json({ error: "Erro interno ao processar solicitação" }, { status: 500 })
  }
}
