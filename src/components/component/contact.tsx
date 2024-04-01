import { Label } from "./../../components/ui/label";
import { Input } from "./../../components/ui/input";
import { Textarea } from "./../../components/ui/textarea";
import { Button } from "./../../components/ui/button";
import { CardContent, Card } from "./../../components/ui/card";

export function Contact() {
  return (
    <div className="flex items-center justify-center h-screen p-6" id="contact">
      <Card className="bg-gray-700 bg-opacity-100 p-6">
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2 flex items-center flex-col">
              <h2 className="text-3xl font-bold text-white">Contact Us</h2>
              <p className="text-black-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form action="https://formbold.com/s/3jy1l" className="space-y-4 " method="POST">
              <div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" name="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" name="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" name="message" placeholder="Enter your message" />
                </div>
                <div className="flex justify-center pt-3">
                  <Button className="hover:bg-blue-600 bg-blue-400  text-white" type="submit">
                    Send message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
