import Badge from "../components/Badge";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/card";
import Container from "../components/Container";
import Icon from "../components/Icon";
import InputCheckBox from "../components/InputCheckbox";
import InputText from "../components/InputText";
import Skeleton from "../components/Skeleton";
import Text from "../components/Text";
import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import XIcon from "../assets/icons/x.svg?react"

export default function PageComponents () {
    return (
    <Container>
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo!
        </Text>
        <Text className="text-green-base">
          Olá mundo!
        </Text>
        <Text variant="body-md-bold">
          Olá mundo!
        </Text>
        <Text>Levar o dog pra passear</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base"/>
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={XIcon} />
      </div>

      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>NovaTarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}/>
        <ButtonIcon icon={TrashIcon} variant="secondary"/>
        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        <ButtonIcon icon={TrashIcon} loading/>
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckBox />

        <InputCheckBox loading />
      </div>

      <div>
        <Card size="md">Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton  className="h-6"/>
        <Skeleton  className="h-6"/>
        <Skeleton  className="w-96 h-6"/>
      </div>
    </div>
    </Container>
  );
}