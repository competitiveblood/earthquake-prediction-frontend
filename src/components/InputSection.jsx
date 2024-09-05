import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InputSection = ({ t, triggerNotification }) => (
  <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <CardHeader>
      <CardTitle>{t.generatePrediction}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <label className="block">
          {t.location}:
          <input type="text" className="w-full border rounded p-2 mt-1" placeholder={t.location} />
        </label>
        <label className="block">
          {t.timeRange}:
          <input type="date" className="w-full border rounded p-2 mt-1" />
        </label>
        <button 
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-pink-500 hover:to-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onClick={triggerNotification}
        >
          {t.generatePrediction}
        </button>
      </div>
    </CardContent>
  </Card>
);

export default InputSection;
