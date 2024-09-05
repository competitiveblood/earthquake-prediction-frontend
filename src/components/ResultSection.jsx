import React from 'react';
import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const ResultSection = ({ t, probability, magnitude, setMagnitude }) => (
  <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <CardHeader>
      <CardTitle>{t.generatePrediction}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center">
          <Activity className="mr-2 text-yellow-500" />
          <p><strong>{t.probability}:</strong></p>
          <div className="ml-2 text-2xl font-bold text-yellow-500">{probability}%</div>
        </div>
        <div>
          <p><strong>{t.magnitude}:</strong></p>
          <Slider
            value={[magnitude]}
            onValueChange={(value) => setMagnitude(value[0])}
            max={10}
            step={0.1}
            className="mt-2"
          />
          <div className="text-center text-2xl font-bold text-blue-500">{magnitude.toFixed(1)}</div>
        </div>
        <p><strong>{t.confidence}:</strong> Medium</p>
      </div>
    </CardContent>
  </Card>
);

export default ResultSection;