
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [orders, setOrders] = useState([]);
  const [stock, setStock] = useState([
    { name: "Camisa Time 1", quantity: 10 },
    { name: "Camisa Time 2", quantity: 8 },
    { name: "Camisa Time 3", quantity: 15 },
    { name: "Camisa Time 4", quantity: 5 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const confirmOrder = () => {
    setOrders([...orders, { items: cart, total }]);
    setOrderConfirmed(true);
    setCart([]);
    setShowCheckout(false);
  };

  const updateStock = (index, newQuantity) => {
    const updated = [...stock];
    updated[index].quantity = newQuantity;
    setStock(updated);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#1E3A8A] text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Possato Sports</h1>
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="px-4 py-2 rounded text-black w-64"
        />
        <div className="space-x-4">
          <Button onClick={() => setShowCheckout(true)} className="bg-[#3B82F6] hover:bg-blue-500">
            Carrinho ({cart.length})
          </Button>
          <Button onClick={() => setShowAdmin(!showAdmin)} className="bg-[#3B82F6] hover:bg-blue-500">
            Admin
          </Button>
        </div>
      </nav>

      {/* Banner de Promoção */}
      <div className="bg-[#3B82F6] text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-2">Nova coleção 2025 chegou!</h2>
        <p className="text-lg">Frete grátis em pedidos acima de R$199</p>
      </div>

      {/* Categorias */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Categorias</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#E0E7FF]">Masculino</Button>
          <Button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#E0E7FF]">Feminino</Button>
          <Button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#E0E7FF]">Infantil</Button>
          <Button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#E0E7FF]">Times</Button>
        </div>
      </section>

      {/* Produtos */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Produtos em destaque</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stock.map((item, index) => (
            <Card key={index} className="bg-white shadow rounded text-center">
              <div className="h-40 bg-gray-200 mb-2" />
              <CardContent>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-600">R$ 149,90</p>
                <p className="text-sm text-gray-500">Estoque: {item.quantity}</p>
                <Button
                  className="mt-2 bg-[#1E3A8A] text-white hover:bg-[#3B82F6]"
                  onClick={() => addToCart({ name: item.name, price: 149.9 })}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
