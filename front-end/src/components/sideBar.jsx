import React from 'react';
import chapitres from '../assets/chapitres.json';
import { Sylabus } from './sylabus';

export function SideBar() {
  return (
    <div className="w-4/12 bg-slate-300 m-2 overflow-y-scroll overflow-x-hidden hideScroll p-2 rounded-md">
      {chapitres.chapitres.map((chapitre) => (
        <Sylabus key={chapitre.id} chapitre={chapitre}  />
      ))}
    </div>
  );
}
