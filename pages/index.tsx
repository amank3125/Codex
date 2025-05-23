import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function Home() {
  return (
    <>
      <Head>
        <title>Codex SaaS</title>
      </Head>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Workflow</h1>
        <p className="text-xl mb-8">Powerful SaaS tools for modern businesses.</p>
        <Button className="text-lg">Get Started</Button>
      </header>

      <section id="features" className="py-16 container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Analytics Platform</h3>
          <p>Gain insights with real-time dashboards and reporting.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Marketing Suite</h3>
          <p>Automate campaigns and track conversions effortlessly.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Collaboration Tools</h3>
          <p>Streamline team communication and project management.</p>
        </div>
      </section>

      <section id="pricing" className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Flexible Pricing</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h5 className="text-xl font-semibold mb-4">Starter</h5>
            <p className="mb-6">$19 / month</p>
            <Button>Choose</Button>
          </Card>
          <Card>
            <h5 className="text-xl font-semibold mb-4">Growth</h5>
            <p className="mb-6">$49 / month</p>
            <Button>Choose</Button>
          </Card>
          <Card>
            <h5 className="text-xl font-semibold mb-4">Enterprise</h5>
            <p className="mb-6">Contact us</p>
            <Button>Contact Sales</Button>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
          </div>
          <Textarea rows={4} placeholder="Message" required />
          <div className="text-center">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </section>

      <footer className="text-center py-8 bg-gray-100">
        <p>&copy; 2024 Codex SaaS. All rights reserved.</p>
      </footer>
    </>
  );
}
