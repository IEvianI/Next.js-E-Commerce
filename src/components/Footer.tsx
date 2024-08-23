import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <Link href="/">
                <div className="text-2xl tracking-wide">OMNISHOP</div>
                </Link>
                <p>16 rue des roses, Le Temple de Bretagne, Loire-Atlantique, 44360, France</p>
                <span className="font-semibold">allainevan1@gmail.com</span>
                <span className="font-semibold">+33 07 68 33 90 69</span>
                <div className="flex gap-6">
                    <Image src="/facebook.png" alt="" width={16} height={16} />
                    <Image src="/instagram.png" alt="" width={16} height={16} />
                    <Image src="/youtube.png" alt="" width={16} height={16} />
                    <Image src="/pinterest.png" alt="" width={16} height={16} />
                    <Image src="/x.png" alt="" width={16} height={16} />
                </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                <div className="flex flex-col justify-between">
                    <h1 className="font-medium text-lg">ENTREPRISE</h1>
                    <div className="flex flex-col gap-6">
                        <Link href="">A propos de nous</Link>
                        <Link href="">Carrières</Link>
                        <Link href="">Affiliations</Link>
                        <Link href="">Blog</Link>
                        <Link href="">Contactez Nous</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">BOUTIQUE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Nouveaux arrivages</Link>
              <Link href="">Accessoires</Link>
              <Link href="">Hommes</Link>
              <Link href="">Femmes</Link>
              <Link href="">Tous les produits</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">AIDE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Service client</Link>
              <Link href="">Mon compte</Link>
              <Link href="">Trouver un magasin</Link>
              <Link href="">Droit et vie privée</Link>
              <Link href="">Carte cadeau</Link>
            </div>
          </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <h1 className="font-medium text-lg">S&apos;ABONNER</h1>
                <p>Soyez les premiers à recevoir les dernières nouvelles sur les tendances, les promotions et bien plus encore !</p>
                <div className="flex">
                    <input type="text" placeholder="Adresse email" className="p-4 w-3/4" />
                    <button className="w-1/4 bg-lama text-white">REJOINDRE</button>
                    </div>
                    <span className="font-semibold">Paiements sécurisés</span>
                    <div className="flex justify-between">
                        <Image src="/discover.png" alt="" width={40} height={20} />
                        <Image src="/skrill.png" alt="" width={40} height={20} />
                        <Image src="/paypal.png" alt="" width={40} height={20} />
                        <Image src="/mastercard.png" alt="" width={40} height={20} />
                        <Image src="/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2024 Omnishop</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Langue</span>
                        <span className="font-medium">FR | France</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Devise</span>
                        <span className="font-medium">€ EUR</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Footer 