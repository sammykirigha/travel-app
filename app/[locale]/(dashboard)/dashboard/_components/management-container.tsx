import React from 'react';

  import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/@/components/ui/card';
import { GalleryUploadsForm } from './gallery-uploads-form';


const ManagementContainer = () => {

  return (
    <Card className='m-2'>
        <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between p-2">
            <CardTitle>Resources Management</CardTitle>
            <Link href="/dashboard/applications" className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg">
            Upload Files
            </Link>
            </div>
        </CardHeader>
        <CardContent>
            <GalleryUploadsForm />
        </CardContent>
    </Card>
  );
}

export default ManagementContainer;
