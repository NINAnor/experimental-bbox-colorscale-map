import logoImg from '../../../img/logo_full.png';

export default function Metadata({ title, subtitle, description, metadataRef }) {
  return (
    <div ref={metadataRef} className="metadata">
      {subtitle && <p>{subtitle}</p>}
      {description && (<details>
        <summary>Beskrivelse</summary>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </details>)}
    </div>
  )
}