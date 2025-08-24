import React, { useEffect, useRef } from 'react';
import { Event } from '../types';

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose, triggerRef }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (event) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
      
      // Trap focus within modal
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          const modal = modalRef.current;
          if (!modal) return;
          
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // Return focus to trigger element
        if (triggerRef?.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [event, onClose, triggerRef]);

  if (!event) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      id="modal" 
      style={{ display: 'block' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={handleBackdropClick}
    >
      <div className="modal-box" ref={modalRef}>
        <button 
          ref={closeButtonRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        <h2 id="modal-title" aria-label={`Event from year ${event.year}`}>
          {event.year}
        </h2>
        <h3>{event.title}</h3>
        <img 
          src={event.imageURL} 
          alt={`Detailed view of ${event.title}`}
        />
        <p id="modal-description">{event.description}</p>
        <div className="modal-category">
          <strong>Category:</strong> {event.category}
        </div>
      </div>
    </div>
  );
};