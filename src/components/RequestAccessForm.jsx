// src/components/RequestAccessForm.jsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function RequestAccessForm() {
  return (
    <div className="container py-20 flex justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">
            Request Access
          </h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Organization Name" required />
            <Input placeholder="Contact Person" required />
            <Input type="email" placeholder="Email Address" required />
            <Input placeholder="Website or LinkedIn (optional)" />
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
