
 import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
 import * as React from 'react';
 function BlogEditor() {
     const toolbarSettings = {
         items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
             'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
             'LowerCase', 'UpperCase', '|',
             'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
             'Outdent', 'Indent', '|',
             'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
             'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
     };
     const quickToolbarSettings = {
         image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'],
         link: ['Open', 'Edit', 'UnLink']
     };
     return (
     <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings}>
       <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
     </RichTextEditorComponent>);
 }
 export default BlogEditor;