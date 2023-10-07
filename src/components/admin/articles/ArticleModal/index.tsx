import { useState, createContext, useEffect, useRef } from 'react';
import { Modal } from '../../components/Modal';
import ArticleEditSection from './ArticleEditSection';
import type { Article } from '../../../../actions/articles';
import _ from 'lodash';
import { Editor } from 'tinymce';

type ArticleModalProps = {
  showModal?: boolean;
  currentArticle?: Article;
  onSave?: (article: Article) => Promise<void>;
  onClose?: () => void;
};

type ArticleModalContext = {
  article?: Article;
};

const ArticleContext = createContext<ArticleModalContext>({
  article: undefined,
});

function ArticleModal({ showModal = false, currentArticle, onClose, onSave }: ArticleModalProps) {
  const [show, setShow] = useState<boolean>(showModal);
  const [saving, setSaving] = useState<boolean>(false);
  const [article, setArticle] = useState<Article | undefined>(currentArticle);
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (showModal !== show) {
      setShow(showModal || false);
    }
  }, [showModal]);

  useEffect(() => {
    if (!_.isEqual(currentArticle, article)) {
      setArticle(currentArticle);
    }
  }, [currentArticle]);

  useEffect(() => { console.log('article', article) }, [])

  if (!article) return <></>;

  return (
    <ArticleContext.Provider value={{ article }}>
      <Modal show={show}>
        <Modal.Header
          onCancel={() => {
            setShow(false);
            if (typeof onClose === 'function') {
              onClose();
            }
          }}
          disableClose={saving}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Edit Article
          </h3>
        </Modal.Header>
        <Modal.Body>
          <ArticleEditSection
            ref={editorRef}
            article={article}
            setArticle={setArticle}
          />
        </Modal.Body>
        <Modal.Footer
          disableClose={saving}
          saving={saving}
          onSave={async () => {
            setSaving(true);
            await editorRef.current?.uploadImages();
            if (typeof onSave === 'function') {
              await onSave(article).catch(error => console.error(error));
            }
            setSaving(false);
          }}
          onCancel={async () => {
            setShow(false);
            if (typeof onClose === 'function') {
              onClose();
              // Unmount editor to avoid toolbar menus from staying open.
              await editorRef.current?.editorManager.remove();
            }
          }}
        />
      </Modal>
    </ArticleContext.Provider>
  );
}

export default ArticleModal;
