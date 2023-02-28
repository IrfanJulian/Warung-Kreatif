import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ButtonWhatsapp from '../../components/ButtonWhatsapp'
import CardPacketBlue from '../../components/CardPacketBlue'
import CardPacketRed from '../../components/CardPacketRed'
import CardPacketGreen from '../../components/CardPacketGreen'
import CardPacketPurple from '../../components/CardPacketPurple'

const Paket = () => {
  return (
    <div>
        <div className="container mx-auto pt-28 md:pt-28 pb-10">
            <div className="md:grid md:grid-cols-4 md:gap-10 space-y-10 md:space-y-0">
                <CardPacketBlue />
                <CardPacketRed />
                <CardPacketGreen />
                <CardPacketPurple />
            </div>
        </div>
        <div className="fixed top-0">
            <Navbar />
        </div>
        <ButtonWhatsapp />
        <Footer />
    </div>
  )
}

export default Paket