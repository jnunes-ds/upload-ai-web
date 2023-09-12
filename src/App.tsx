import { Github } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';

export function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Developed with ❤️ </span>
          <Separator orientation='vertical'   className='h-6' />
          <Button variant="outline" size="lg">
            <Github  className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2  gap-4 flex-1 '>

          </div>

          <p className='text-sm text-muted-foreground'>Remember, do you need to use the "transcription" variable in order to add the selected video content</p>
        </div>
        <aside className='w-80'></aside>
      </main>
    </div>
  )
}
