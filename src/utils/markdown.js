// First, import `draftToMarkdown`
import { draftToMarkdown } from 'markdown-draft-js';

const markdownString = (rawObject) =>{
  return draftToMarkdown(rawObject, {

    styleItems: {
      image: {
        open:  (entity) => {

          let h = entity.data.aspect_ratio.height
          let w = entity.data.aspect_ratio.width
          let r = entity.data.aspect_ratio.ratio

          return "<figure class='graf graf--figure'> \
             <div> \
                <div class='aspectRatioPlaceholder is-locked' style='max-width: "+ w +"px; max-height: "+ h +"px;'> \
                   <div class='aspect-ratio-fill' style='padding-bottom: "+ r +"%;'></div> \
                   <img src='"+ entity.data.url + "' height='"+ h +"' width='"+ w +"' class='graf-image'> \
                   <div></div> \
                </div> \
                <figcaption class='imageCaption'> \
                   <div class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'> \
                    <span>"+ entity.text +"</span> \
                   </span> \
                   </div> \
                </figcaption> \
             </div> \
             "


          //return '<span class='mention-item' data-user-id='' + entity.data.id + ''>';
        },

        close:  (entity) => {
          return '</figure>';
        }
      }
    }
  });
}

export default markdownString