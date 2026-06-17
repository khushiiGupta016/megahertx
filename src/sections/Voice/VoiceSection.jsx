import { useState } from "react";
import { CURSOR } from "../../constants/cursorLabels";
import CategorySplitLayout from "../../components/service/CategorySplitLayout";
import ServiceCard from "../../components/service/ServiceCard";
import AudioWaveGraphic from "../../components/ui/AudioWaveGraphic";
import BookingModal from "../../components/ui/BookingModal";
import Toast from "../../components/ui/Toast";
import { SECTIONS } from "../../constants/sections";
import { voiceOverview } from "../../data/voiceServices";

export default function VoiceSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <CategorySplitLayout
        id={SECTIONS.voice}
        theme="dark"
        title={voiceOverview.title}
        intro={voiceOverview.intro}
        decoration={<AudioWaveGraphic />}
      >
        {voiceOverview.cards.map((card, index) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            action={card.action}
            onBook={() => setIsBookingOpen(true)}
            cursorLabel={CURSOR.VIEW}
            variant="voice"
            delay={index * 0.06}
          />
        ))}
      </CategorySplitLayout>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onConfirm={() => setShowToast(true)}
      />

      <Toast message="slot booked" isVisible={showToast} onDismiss={() => setShowToast(false)} />
    </>
  );
}
