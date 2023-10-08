
import { forwardRef, ForwardedRef } from 'react';
import _ from 'lodash';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditorType } from 'tinymce';
import { Storage } from 'aws-amplify';
import styleURL from '../../../../index.css?url';

type EditorProps = {
  value?: string | null;
  onChange?: (a: string, editor?: TinyMCEEditor) => void;
  onSave?: (editor: TinyMCEEditorType) => Promise<void>;
}

const Editor = forwardRef((
  { value, onChange }: EditorProps,
  ref: ForwardedRef<TinyMCEEditorType | undefined>,
) => {

  // TODO: Need to somehow close the TinyMCE when component is unmounted.

  const formatter = (editor: TinyMCEEditorType) => {
    editor.dom.addClass(editor.dom.select('a'), 'text-fuchsia-500 text-fuchsia-400 hover:underline');
    editor.dom.addClass(editor.dom.select('ul'), 'list-disc ml-5 text-gray-800 dark:text-gray-300');
    editor.dom.addClass(editor.dom.select('ol'), 'list-decimal ml-5 text-gray-800 dark:text-gray-300');
  }

  return (
    <>
      <TinyMCEEditor
        onInit={(_evt, editor) => {
          _.assign(ref, {
            current: editor,
          });
        }}
        apiKey='tfotaor2pdmyzmr7dhhwg4q3j65mpmgf0nwvj5qcwtjc261s'
        value={value || ''}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist','autolink','lists','link','image','charmap','print','preview','anchor',
            'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime','media','table','paste','code','help','wordcount','image'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | blocks fontfamily | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | link image ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          formats: {
            h1: { block: 'h1', classes: 'text-5xl pb-5 pt-5 text-gray-800 dark:text-gray-300' },
            h2: { block: 'h2', classes: 'text-4xl pb-4 pt-4 text-gray-700 dark:text-gray-200' },
            h3: { block: 'h3', classes: 'text-3xl pb-3 pt-3 text-gray-600 dark:text-gray-200' },
            h4: { block: 'h4', classes: 'text-2xl pb-2 pt-2 text-gray-600 dark:text-gray-200' },
            h5: { block: 'h5', classes: 'text-xl pb-1 pt-1 text-gray-600 dark:text-gray-200' },
            h6: { block: 'h6', classes: 'text-lg pb-1 pt-1 text-gray-600 dark:text-gray-200' },
            p: { block: 'p', selector: 'p', inline: 'p', classes: 'text-base pb-1 pt-1 text-gray-600 dark:text-gray-200' },
            bold: { block: 'b', selector: 'b', inline: 'b', classes: 'text-gray-800 dark:text-gray-300' },
            i: { block: 'i', selector: 'i', inline: 'i', classes: 'text-gray-800 dark:text-gray-300' },
            alignleft: [
              { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,ul,ol,li,table', classes: 'text-left', styles: { 'text-align': 'left' } },
              { selector: 'img,div', classes: 'mr-auto', styles: { 'text-align': 'left' } }
            ],
            alignright: [
              { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,ul,ol,li,table', classes: 'text-right', styles: { 'text-align': 'right' } },
              { selector: 'div,img', classes: 'ml-auto', styles: { 'text-align': 'right' } }
            ],
            aligncenter: [
              { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,ul,ol,li,table', classes: 'text-center', styles: { 'text-align': 'center' } },
              { selector: 'div,img', classes: 'mx-auto', styles: { 'text-align': 'center' } }
            ],
          },
          content_css: styleURL,
          /* enable title field in the Image dialog*/
          image_title: true,
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: false,
          /*
            URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
            images_upload_url: 'postAcceptor.php',
            here we add custom filepicker only to Image dialog
          */
          file_picker_types: 'image',
          images_upload_handler: async (blobInfo) => {
            console.log('filename', blobInfo.filename());
            console.log('blob', blobInfo.blob());
            const { key } = await Storage.put(blobInfo.filename(), blobInfo.blob());
            const fileUrl = await Storage.get(key);
            return fileUrl;
          },
        }}
        onEditorChange={async (a, editor) => {
          if (typeof onChange === 'function') {
            formatter(editor);
            onChange(a);
          }
        }}
      />
      <ul className='list-disc'></ul>
    </>
  )
});

export default Editor;
