import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MapVisualization = ({ t }) => (
  <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <CardHeader>
      <CardTitle>{t.mapVisualization}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gradient-to-br from-blue-200 to-green-200 h-64 rounded-lg flex items-center justify-center">
        <MapPin size={48} className="text-red-500" />
        <p>Interactive map placeholder</p>
      </div>
    </CardContent>
  </Card>
);

export default MapVisualization;
