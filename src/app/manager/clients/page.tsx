'use client'

async function fetchClients() {
    const response = await fetch('/api/manager/clients');
    if (!response.ok) {
        throw new Error('Falha ao buscar clientes');
    }
    return response.json();
}

export default function ClientsPage() {

}